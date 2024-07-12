
function checkE (type: string, value: string) {

    switch(type){

        case 'email':
        case 'e-mail':
        case 'correo':

            if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value) ) {
                return "Invalid e-mail format";
            } else {
                return '';
            }


        case 'phone':

            if (! /(?=.*?[0-9])/.test(value) ) {
                return "Teléfono incorrecto";
            } else {
                return "";
            }

 

        case 'password':
        case 'password2':

            if(value.length < 6){
                return "Write 8 characters at least"
            } else {

                //Checking the password format....

                // if (! /[\d()+-]/g.test(value) ) {
                //     return "Invalid password";
                // } else {
                //     return "";
                // }

                return "";
            }

        default:
            return "";
        break;

    }

}

export default checkE;