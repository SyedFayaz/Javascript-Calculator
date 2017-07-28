    function getInputFromTextbox(element) {
        return document.getElementById(element);
    }


        
    function clearField(val) {

        if(typeof val == 'undefined') {
            getInputFromTextbox("expression").value="";
        }
        else {
            getInputFromTextbox("expression").value=val;
        }
    }

    function addToExpression(val) {
        getInputFromTextbox("expression").value+=val;
    }


    function evaluateExpression(e) { 
        try { 
            clearField(eval(getInputFromTextbox("expression").value)) ;
        } 
        catch(e) {
            clearField('Incorrect Input') ;
           setTimeout(function() {getInputFromTextbox("expression").value=""},200);
        } 
    } 

    validate = function(evt) {
        // Check if the keys are numbers and arithmetic operator.
        // For a cross-browser solution, use the "which" property together with keyCode.
        if ([8,35,46,37, 39, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 35, 36,96, 97, 98,99,100,101,102,103,104,105,106,107,109,110,111,188,190].indexOf(evt.keyCode || evt.which) == -1) {
           // var c=evt.which || evt.keyCode;
           // if((c>45 && c<57)) || (c>93 && c<112) || (c>37 && c <39))
           // if((c > 18 && c < 48) || (c > 90 && c < 124) ||
     //(c > 122 && c !== 127)) return false;
            evt.returnValue = false;// Stopping non-numeric keystrokes from reaching an edit field.
            if(evt.preventDefault) {
            evt.preventDefault();
            } // For event cancellation. It tells the user agent that if the event goes unhandled, its default action should not be taken as it normally would be.
        }
    }


    function checkKey(event) {
        if(event.keyCode==13) {       // Check for ENTER key
            evaluateExpression();
        }
        else if(event.keyCode==17) {  // Check for Ctrl key
            clearField("");
        }
        else {
            validate(event);
        }
    } 

