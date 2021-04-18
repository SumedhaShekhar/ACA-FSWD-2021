# **CMD COMMANDS**
### 1. **Change Directory (CD)** - *This command enables you to change the current directory or, in other words, to navigate to another folder from your PC.*
### 2. **Change Drive** - *In order to change the drive from "C:" to "D:" type "d:" and press enter.*
### 3. **Changing Drive and Directory simultaneously** - *If you want to change the drive and directory simultaneously for example - You are on "D:" drive and want to switch on to "C:" drive as well as change the present directory use "cd /d C:\Windows".*
### 4. **DIR** - *Used to view the contents of the folder*
### 5. **MKDIR** - *Used to create a new directory.*
### 6. **REN** - *Used to rename files and folders. To rename a file, use the command, like this: “ren filename.extension newname.extension”.*
### 7. **copy** - *The Copy command allows you to copy files from one location to another. To use this command, type “copy location\filename.extension newlocation\newname.extension”.*
### 8. **XCOPY /s /i** - *Used to copy a folder and its content from one location to another. The “/s” parameter ensures that all the directories and subdirectories are going to be copied, except the ones that are empty. The “/i” parameter creates a new directory if the destination folder does not exist and copies all the files in it.*
### 9. **DEL** -*The DEL (Delete) is used to delete files from the folders you have created. To delete all the files from a folder, you can run the command “del folder”.In order to confirm the delete process type y.*
### 10. **RD** - *Used to delete a folder.*
### 11. **launch an app** - *To run a program from the Command Prompt, you need only to navigate to the folder that contains the executable and type the program’s name. For example, if you want to launch Paint using Command Prompt, go to “C:\Windows\System32”, where its executable is: mspaint.exe.*
### 12. **help** - *Used to secure help in the command prompt.* 
# **Useful Terms**
## **Clientside**
#### *In web development, 'client side' refers to everything in a web application that is displayed or takes place on the client (end user device). This includes what the user sees, such as text, images, and the rest of the UI, along with any actions that an application performs within the user's browser. Markup languages like HTML and CSS are interpreted by the browser on the client side.*
## **Serverside**
#### *Much like with client side, 'server side' means everything that happens on the server, instead of on the client. In the past, nearly all business logic ran on the server side, and this included rendering dynamic webpages, interacting with databases, identity authentication, and push notifications.*
## **HTTP protocols**
#### *HTTP is a protocol which allows the fetching of resources, such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser.*
## **HTTP vs HTTPS:**
#### *HTTP | HTTPS
---------- | -----------
HTTP URL in your browser's address bar is http:// | HTTPS URL in your browser's address bar is https://
unsecured | secured
uses port 80 | uses port 443
operates at application level | operates at transport level
No SSL certificates required | it is required that you have an SSL certificate and it is signed by a CA.
No domain validation required | requires at least domain validation and certain certificates even require legal document validation.
No encryption | the data is encrypted before sending*

## **FRAMEWORKS VS LIBRARIES:**
#### *The technical difference between a framework and library lies in a term called inversion of control. When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow.*