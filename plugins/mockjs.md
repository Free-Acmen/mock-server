#数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：
-属性名   name
-生成规则 rule
-属性值   value
'name|rule': value
1.'name|min-max': string   通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max
例子：'lastName|2-5':'jiang', 重复jiang这个字符串 2-5 次

2.'name|count': string   通过重复 string 生成一个字符串，重复次数等于 count
例子：'firstName|3':'fei', 重复fei这个字符串 3 次，打印出来就是'feifeifei'。

3.'name|min-max': number   生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型。
例子：'age|20-30':25, 生成一个大于等于 20、小于等于 30 的整数，属性值 25 只是用来确定类型

4.'name|+1': number   属性值自动加 1，初始值为 number
例子：'big|+1':0, 属性值自动加 1，初始值为 0，以后每次请求在前面的基础上+1

5.'name|min-max.dmin-dmax': number   生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位。
例子：'weight|100-120.2-5':110.24, 生成一个浮点数,整数部分大于等于 100、小于等于 120，小数部分保留 2 到 5 位

6.'name|1': boolean   随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2
例子：'likeMovie|1':Boolean, 随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。

7.属性值是对象：var obj={'host':'www.baidu','port':'12345','node':'selector'}

　　7-1.'name|count': object  从属性值 object 中随机选取 count 个属性。
　　例子：'life1|2':obj, 从属性值 obj 中随机选取 2 个属性

　　7-2.'name|min-max': object  从属性值 object 中随机选取 min 到 max 个属性
　　例子：'life1|1-2':obj, 从属性值 obj 中随机选取 1 到 2 个属性。

8.属性值是数组：var arr=['momo','yanzi','ziwei']

　　8-1.'name|1': array   从属性值 array 中随机选取 1 个元素，作为最终值
　　例子：'friend1|1':arr, 从数组 arr 中随机选取 1 个元素，作为最终值。

　　8-2.'name|+1': array   从属性值 array 中顺序选取 1 个元素，作为最终值。
　　例子：'friend2|+1':arr, 从属性值 arr 中顺序选取 1 个元素，作为最终值，第一次就是'momo',第二次请求就是'yanzi'

　　8-3.'name|count': array   通过重复属性值 array 生成一个新数组，重复次数为 count。
　　例子：'friend3|2':arr, 重复arr这个数字2次作为这个属性值，得到数据应该是['momo','yanzi','ziwei','momo','yanzi','ziwei']

　　8-4.'name|min-max': array   通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max
　　例子：'friend3|2-3':arr,//通过重复属性值 arr 生成一个新数组，重复次数大于等于 2，小于等于 3
