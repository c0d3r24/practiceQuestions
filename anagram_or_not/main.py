
def anagram_or_not(str1, str2):
  myDict1 = {}
  myDict2 = {}
  for c in list(str1.lower()):
    if c == '!' or c == ' ' or c == ',':
      continue
    if c in myDict1:
      myDict1[c] = myDict1[c] + 1
    else:
      myDict1[c] = 1
  
  for c in list(str2.lower()):
    if c == '!' or c == ' ' or c == ',':
      continue
    if c in myDict2:
      myDict2[c] = myDict2[c] + 1
    else:
      myDict2[c] = 1
  
  for char, count in myDict1.items():
    if myDict1[char] != myDict2[char]:
      print('not aa anagram')
      return False

  print('is an anagram')
  return True
  

anagram_or_not('Mary is Beautiful!','Army be Auti ful is!')