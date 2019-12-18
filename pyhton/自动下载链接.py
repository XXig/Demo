import requests
import urllib.request
 
 
url_1 = ''                              # 链接头
url_2 = input('输入：  ')              # 自己输入部分
 
for i in range(0, 1000000):         # 循环六位数部分
    if len(str(i)) == 1:
        url_3 = '00000' + str(i)
    elif len(str(i)) == 2:
        url_3 = '0000' + str(i)
    elif len(str(i)) == 3:
        url_3 = '000' + str(i)
    elif len(str(i)) == 4:
        url_3 = '00' + str(i)
    elif len(str(i)) == 5:
        url_3 = '0' + str(i)
    elif len(str(i)) == 6:
        url_3 = '' + str(i)
    url = url_1 + url_2 + url_3 + '.zip'
 
    r = requests.get(url, timeout=5, verify=False)
    code = r.status_code
    if code == 200:
        urllib.request.urlretrieve(url, '')     # 下载，后面跟保存地址/具体到文件名
    else:
        print(url + '   不存在')