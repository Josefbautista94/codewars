// 🧩 Challenge: <TITLE> (Codewars - <RANK>)
// 🔗 Link: https://www.codewars.com/kata/<kata-id>
// 📂 Category: <e.g. Arrays, Strings, Math, Algorithms, etc.>
//
// 📝 Description:
// <Paste the problem description here, exactly as shown on Codewars>
//
// 🧪 Examples:
// input → output
// input → output

public class RemoveChars {
    public static String remove(String str) {
      
      if(str.length() <=2){
        return "";
      }
      return str.substring (1, str.length() - 1);
      }
}
