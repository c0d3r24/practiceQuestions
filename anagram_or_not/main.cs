using System;
using System.Collections.Generic;
using System.Linq;

class MainClass {
  public static void Main (string[] args) {
    string str = "Mary is Beautiful!";
    string str2 = "Army be Auti ful is!";
    str = str.ToLower();
    str2 = str2.ToLower();
    
    SortedDictionary<char, int> myDict1 = new SortedDictionary<char, int>();
    SortedDictionary<char, int> myDict2 = new SortedDictionary<char, int>();
    
    foreach(char c in str.ToCharArray()){
        if(c=='!' || c== ' ' || c == ',')continue;
        if(myDict1.ContainsKey(c)){ myDict1[c] = myDict1[c] + 1; }
        else{ myDict1.Add(c, 1); }
    }
    foreach(char c in str2.ToCharArray()){
        if(c=='!' || c== ' ' || c ==',')continue;
        if(myDict2.ContainsKey(c)){ myDict2[c] = myDict2[c] + 1; }
        else{ myDict2.Add(c, 1); }
    }
    var dict3 = myDict2.Where(entry => myDict1[entry.Key] != entry.Value)
                 .ToDictionary(entry => entry.Key, entry => entry.Value);
    
    if(dict3.Count == 0){
      Console.WriteLine("strings are anagram");
    }else{
      foreach(var d in dict3){
        Console.WriteLine(d.Key+" " + d.Value);
      }
    }
  }
}

// make both the strings lowercase to ease matching
// we will take each characters in an array and we will ignore 
// spaces, punctuation etc. ( ! and , )
// we will store each one in a Sorted dictionary with it's count.
// we iterate and check the count. 
// if the count is okay we are good.
// else khallassss.
