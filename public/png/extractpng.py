import re
import wget

# f = open("champion.json", "r", encoding="utf8")
fl = open('champlist.txt', 'w')
# reading = f.read()
# png = re.findall("full\": \"(.*?)\"", reading, re.DOTALL)

import json

import urllib.request
with urllib.request.urlopen('https://ddragon.leagueoflegends.com/api/versions.json') as response:
   html = response.read()
# print(json.loads(html)[0])
latestversion = json.loads(html)[0]

with urllib.request.urlopen('http://ddragon.leagueoflegends.com/cdn/'+latestversion+'/data/en_US/champion.json') as response:
   html = response.read()
# print(json.loads(html))
championjson = json.loads(html)
champlist =championjson["data"].keys()
# print(type(championjson))
# # print(json.loads(html)[0])
# pnglist = re.findall("full\': \'(.*?)\'", championjson, re.DOTALL)

print(champlist)
photofile = []
for champ in champlist:
   url = 'http://ddragon.leagueoflegends.com/cdn/'+latestversion+'/img/champion/'+champ+'.png'
   image_filename = wget.download(url)
   photofile.append(image_filename)
print(photofile)  

for champ in champlist:
    fl.writelines('<div class="leftimages">'+'\n')
    fl.writelines('  <img src=../public/png/'+champ+'.png'+" class=\"sqimg\" id=\""+champ+'">'+'\n')
    fl.writelines('  <span class="championname">'+champ+'</span>'+'\n')
    fl.writelines('</div>'+'\n')
#    
# photofile = []
# for elem in png:
#     url = 'http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/'+elem
#     fl.writelines('<div class="leftimages">'+'\n')
#     fl.writelines('  <img src=../public/png/'+elem+" class=\"sqimg\" onclick=\"openImg(this.src)\">"+'\n')
#     fl.writelines('  <span class="championname">'+elem.replace('.png','')+'</span>'+'\n')
#     fl.writelines('</div>'+'\n')
#     # image_filename = wget.download(url)
#     #    <div class="leftimages">
#     #     <img src=png/Aatrox.png id='Aatrox' class="sqimg" onclick="openImg(this.src)">
#     #     <span class="championname">Aatrox</span>
#     #   </div>
#     # photofile.append(image_filename)
# # print(photofile)
