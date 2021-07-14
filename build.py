import logging
import os
import re
import json
import shutil

from utils.crawl import get_text
from utils.ships import get_raw_ship_data


def setup_ship_reload_info():
    text = get_text(
        url="https://wiki.biligame.com/blhx/index.php?title=MediaWiki:PN.js&action=raw&ctype=text/javascript",
        params={},
        path="resources/cache/PN.js",
    )

    ship_data = {}
    for sid, blvl, row, name in re.findall(
        r"(?m)^PN(\w+)(\d):\[(.+?)\],?\s*//(.+?)_", text
    ):
        ship_data.setdefault(sid, {"name": name, "data": {}})
        data = ship_data[sid]["data"]
        # 15装填基础,16装填成长,17装填额外,40可强化装填,46装填改造
        keys = [15, 16, 17, 40, 46]
        row = row.split(",")
        data[blvl] = [int(row[idx]) for idx in keys]

    with open("resources/data_reload.json", "w", -1, "UTF8") as f:
        json.dump(ship_data, f, ensure_ascii=False, indent=2)


def setup_ship_data():
    for ship in get_raw_ship_data():
        # TODO: 实现舰娘数据解析
        print(ship["query"]["pages"][0]["title"])


def generate_files():
    if os.path.exists("build"):
        shutil.rmtree("build")
    shutil.copytree("static", "build")
    shutil.copy2("resources/data_reload.json", "build/data_reload.json")


if __name__ == "__main__":
    logging.basicConfig(level="INFO")

    setup_ship_reload_info()
    setup_ship_data()
    generate_files()