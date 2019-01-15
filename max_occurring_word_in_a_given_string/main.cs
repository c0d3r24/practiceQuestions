using System;
using System.Collections.Generic;

class MainClass {
  public static void Main (string[] args) {
    string myStr = "aaa bbb aaa bbb cccc aaa ddd www com";
    string[] myArr = myStr.Split(' ');
    Dictionary<string, int> myDict = new Dictionary<string, int>();
    int max = 0 ;
    string maxString = "";
    foreach(string s in myArr){
      
      if (myDict.ContainsKey(s)) { myDict[s] = myDict[s] + 1; } 
      else { myDict.Add(s, 1); }
      
      if (max < myDict[s] ){
        max = myDict[s];
        maxString = s;
      }
    }
    Console.WriteLine(maxString+":  "+max); 
  }
}