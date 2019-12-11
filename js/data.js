function WriteToFile(passForm) {
    set fso = CreateObject("Scripting.FileSystemObject"); 
    set s   = fso.CreateTextFile("C:\Users\admin\Desktop\HTML_CSS\Website/inputdata.txt", True);
 
    var gender = document.getElementById('gender');
    var major  = document.getElementById('major');
 
    s.writeline("Gender :" + gender);
    s.writeline("Major :" + major);
 
    s.writeline("-----------------------------");
    s.Close();
 }