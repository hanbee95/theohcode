import re
import wget

f = open("champion.json", "r", encoding="utf8")
fl = open('champlist.txt', 'w')
reading = f.read()
png = re.findall("full\": \"(.*?)\"", reading, re.DOTALL)

photofile = []
for elem in png:
    url = 'http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/'+elem
    fl.writelines('<img src=png/'+elem+" class=\"sqimg\">"+'\n')
    # image_filename = wget.download(url)
    # photofile.append(image_filename)
# print(photofile)
