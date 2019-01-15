import java.util.*;
class Main {
  public static void main(String[] args) {
    String myStr = "aaa bbb aaa bbb cccc aaa ddd www com";
    String[] myArr = myStr.split(" ");
    Map<String, Integer> myDict = new HashMap<String, Integer>();
    int max = 0;
    String maxStr = "";
    for(String val: myArr) {
        if (myDict.get(val) != null) { myDict.put(val, myDict.get(val) + 1); } else { myDict.put(val, 1);}
        if(max < myDict.get(val)){
              max = myDict.get(val);
              maxStr = val;
        }
    }
    System.out.println(maxStr + ": " + max);
  }
}