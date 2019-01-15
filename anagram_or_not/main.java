import java.util.*;
class Main {
  public static void main(String[] args) {
   String str1 =  "Mary is Beautiful!".toLowerCase();
   String str2 = "Army be Auti ful is!".toLowerCase();
   
   Map<Character, Integer> myDict1 = new HashMap<Character, Integer>();
   for(char c : str1.toCharArray()){
     if(c == '!' || c == ' ' || c == ',') continue;
     if(myDict1.get(c) != null){ myDict1.put(c, myDict1.get(c) + 1); }
     else { myDict1.put(c, 1);}
   }
   Map<Character, Integer> myDict2 = new HashMap<Character, Integer>();
   for(char c : str2.toCharArray()){
     if(c == '!' || c == ' ' || c == ',') continue;
     if(myDict2.get(c) != null){ myDict2.put(c, myDict2.get(c) + 1); }
     else { myDict2.put(c, 1);}
   }

   for(Map.Entry<Character, Integer> item : myDict1.entrySet()) {
     if( myDict1.get(item.getKey()) != myDict2.get(item.getKey()))
      {
        System.out.println("not an anagram");
        return;
      }
  }
  System.out.println("string is an anagram");
  }
}