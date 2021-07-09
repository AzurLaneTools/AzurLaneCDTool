import os
import requests
import re
import json


def get_data(url, path, cache=True):
    if cache and os.path.exists(path):
        with open(path, 'r', -1, 'UTF8') as f:
            return f.read()

    resp = requests.get(url)
    if cache:
        with open('resources/PN.js', 'w', -1, 'UTF8') as f:
            f.write(resp.text)
    return resp.text


text = get_data(
    'https://wiki.biligame.com/blhx/index.php?title=MediaWiki:PN.js&action=raw&ctype=text/javascript',
    'resources/PN.js',
)

ship_data = {}
for sid, blvl, row, name in re.findall(
    r'(?m)^PN(\w+)(\d):\[(.+?)\],?\s*//(.+?)_', text
):
    ship_data.setdefault(sid, {'name': name, 'data': {}})
    data = ship_data[sid]['data']
    # 15装填基础,16装填成长,17装填额外,40可强化装填,46装填改造
    keys = [15, 16, 17, 40, 46]
    row = row.split(',')
    data[blvl] = [int(row[idx]) for idx in keys]

with open('resources/data_reload.json', 'w', -1, 'UTF8') as f:
    json.dump(ship_data, f, ensure_ascii=False, indent=2)
