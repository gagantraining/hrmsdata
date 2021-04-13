import os
f = open('out.txt','w')
for data in os.listdir():
    if data.endswith('json'):
        x = data.split('.')
        text = "mongoimport --db hrmsDB --collection "+x[0]+" --file "+data+" --jsonArray"
        f.write(text+"\n")

f.close()
    

