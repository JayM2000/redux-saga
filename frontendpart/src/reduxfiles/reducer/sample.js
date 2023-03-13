const dt = {
    isallowed:false,
    load:true,
    user:null,
    users:[],
    objs:{
        'email':'email'
    }
}

export default function newone(st=dt,act) {
    const {type,payload} = act;

    switch(type) {
        case 'addone':
            return {...st,
                isallowed:true,
                load:false,
                user:payload
            }
        
        default :
            return st;
    }
};