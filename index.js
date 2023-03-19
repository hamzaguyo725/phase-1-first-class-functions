function receivesAFunction(callback) {
    return callback();
    }
    
    function returnsANamedFunction(){
        return function greeting(){
            console.log('Hello world');
        }
        
    }
    
    function returnsAnAnonymousFunction(){
        return function(string){
            console.log(string);
        }
    }