def countString(str):
  myDict = {}
  max = 0
  key = ''
  for word in str.split(' '):
    if word in myDict:
      myDict[word] = myDict[word] + 1
    else:
      myDict[word] = 1
    if max < myDict[word]:
        max = myDict[word]
        key = word
  print(key, max)

countString('aaa bbb aaa bbb cccc aaa ddd www com')