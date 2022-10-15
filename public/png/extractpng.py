import re
import wget

f = open("champion.json", "r", encoding="utf8")
fl = open('champlist.txt', 'w')
reading = f.read()
png = re.findall("full\": \"(.*?)\"", reading, re.DOTALL)

photofile = []
for elem in png:
    url = 'http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/'+elem
    fl.writelines('<div class="leftimages">'+'\n')
    fl.writelines('  <img src=png/'+elem+" class=\"sqimg\" onclick=\"openImg(this.src)\">"+'\n')
    fl.writelines('  <span class="championname">'+elem.replace('.png','')+'</span>'+'\n')
    fl.writelines('</div>'+'\n')
    # image_filename = wget.download(url)
    #    <div class="leftimages">
    #     <img src=png/Aatrox.png id='Aatrox' class="sqimg" onclick="openImg(this.src)">
    #     <span class="championname">Aatrox</span>
    #   </div>
    # photofile.append(image_filename)
# print(photofile)
