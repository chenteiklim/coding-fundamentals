const prompt=require("prompt-sync")({sigint:true});
class Todo{
    constructor(){
        this.symbol='\u274C' 
        this.displayed = false;
        this.displayed2 = false
        this.completed= false
        this.tasks = [];
        this.IDnumbers=[]
        this.editIDs=[]
        this.datas=[]
        this.completeIDs=[]
        this.number = null;
        
    }

    displayTodo(){              
        while (this.number !== 6) {   
            if (this.displayed2){
                this.displayed2=false
            }

            if(!this.displayed) {    
                console.log(`
                ------------TODO APP------------
                What would you like to do?
                1   View my todo list
                2   Add new todo
                3   Edit a todo item
                4   Toggle complete a todo
                5   Delete a todo
                6   Quit app
                Enter (1/2/3/4/5/6):
                `)
                this.displayed = true;
            } 
            this.number = prompt()
            if (this.number >= 1 && this.number <= 6) {
                let intNumber= parseInt(this.number)    
                
                if (intNumber===1){
                    this.viewTodo()
                }

                if (intNumber===2){
                    this.createTodo()
                }

                if (intNumber===3){
                    this.editTodo()
                }

                if (intNumber===4){
                    this.completeTodo()
                }

                if (intNumber===5){
                    this.deleteTodo(this.task)
                }
                
                if (intNumber===6){
                    this.quitTodo()
                }
               
            } else {
                console.log("Invalid input, please enter a number between 1 and 6.");
                this.displayed = false
            }
        }
    }

    viewTodo(){
        for (let i = 0; i < this.datas.length; i++){ 
           console.log(this.datas[i])    
        }
        
        this.displayed=false
    }

    createTodo(){
        if (this.displayed2){
            this.displayed2=false
        }

        if(!this.displayed2) {   
            console.log(`
                Enter your task:
            `)
            this.displayed2 = true;
            this.task=prompt()
            this.tasks.push(this.task)
            console.log('Task added:', this.tasks)
            for (let i = 0; i < this.tasks.length; i++){  
                this.data= (`\n # ${i+1}     ${this.tasks[i]}   ${this.symbol} \n` )
            }
            this.datas.push(this.data)
            this.displayed=false
        }
    }

    editTodo(){
        console.log(`
        Enter the todoID you want to edit
        `)
        this.ID=prompt()
        let editID= parseInt(this.ID)
        this.editIDs.push(this.editID)
        console.log(`
        Change the todo item to:
        `
        )
        this.editValue=prompt()

        for (let i = 0; i < this.datas.length; i++) {
            if (i === editID-1) {
                this.datas[i] = this.datas[i].replace(this.tasks[i], this.editValue)
            }
        } 
        this.displayed=false  
    }

    completeTodo(){
        console.log(`
        Enter the ID of the task you want to mark as complete:
        `)
        this.IDs=prompt()
        let completeID = parseInt(this.IDs)
        this.completeIDs.push(completeID)
        if (completeID > 0 && completeID <= this.tasks.length) {
            this.completed= true
            console.log(`Task ${completeID} is now marked as ${this.completed ? "completed" : "incomplete"}`)
            
            for (let i = 0; i < this.datas.length; i++) {
                if (i === completeID - 1) {
                    this.datas[i] = this.datas[i].replace(this.symbol, '\u2705')
                    break;
                }
            }

        }
        
        else {
            console.log(`Task ${completeID} is not found.`);
        }
        this.displayed=false
    }
   

    deleteTodo(){
        console.log(`
        Enter the todoID you want to delete
        `)
        this.ID=prompt()
        let IDnumber = parseInt(this.ID)
        this.IDnumbers.push(IDnumber)
        if (IDnumber<=this.datas.length) {
            this.datas.splice(IDnumber-1, 1);
        console.log(`Task ${IDnumber} is deleted`)
        } else {
            console.log(`Task ${IDnumber} is not found.`);
        }
        this.displayed=false
    }

    quitTodo(){
        console.log("Exiting the application...");
        process.exit();
    }


}

const todo = new Todo()
todo.displayTodo()