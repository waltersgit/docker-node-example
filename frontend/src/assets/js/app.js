/**
 * Created by peter on 2018/1/31.
 */
import axios from 'axios';
console.log('test2')
axios.get('http://127.0.0.1/api').then(res=>{
    document.getElementById("p1").innerHTML = `Hello ${res.data.name} environmental preparation is successful`;
})