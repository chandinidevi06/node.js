var fs=require("fs")

fs.writeFile("hello.txt","iam the text file",(err)=>{
    if(err){
        console.log("error occurred")
    }else{
        fs.readFile("hello.txt","utf-8",(err,data)=>{
            if(err){
                console.log("error occurred")
            }else{
                var updatedText=data.toUpperCase();
                fs.writeFile("hello.txt",updatedText,(err)=>{
                    if(err){
                        console.log("error occurred")
                    }else{
                        fs.readFile("hello.txt","utf-8",(err,data)=>{
                            if(err){
                                console.log("error occurred")
                            }else{
                                console.log(data);
                            }
                        })
                    }
                })
            }
        })
    }
})


