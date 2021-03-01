import React from 'react';
import axios from 'axios';
import { Dialog } from 'primereact/dialog';


//Cuando no se puede realizar alguna operacion del CRUD, entonces le avisamos 
//al usuario mediante un Dialog(ventana o popup emergente) de error producido


export class GeneroService {
      
      baseUrl ='http://localhost:3000/biblioteca';
    
       async create (genero) {
          try {
                return await axios.post(this.baseUrl+"/genero") .then(res => res.data);
          }
          catch(e) {
                <Dialog visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                    <p>{e.response.data.message}</p>
                </Dialog>
          }
        };
  
        async readAll(){
        
          try {
                return await axios.get(this.baseUrl+"/genero").then(res => res.data);
          }
          catch(e) {
                <Dialog visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                    <p>{e.response.data.message}</p>
                </Dialog>
          }
        };
  
  
        async delete(id){
            
          try {
                return await axios.delete(this.baseUrl+"/genero"+id).then(res => res.data);        
          }
          catch(e) {
                    <Dialog visible={displayBasic} style={{ width: '50vw' }}      footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                        <p>{e.response.data.message}</p>
                    </Dialog>
          }
  
      };
  
        async update (genero){
            
          try {
                return await axios.put(this.baseUrl+"/genero"+ genero._id, genero).then(res => res.data);        
          }
          catch(e) {
                    <Dialog visible={displayBasic} style={{ width: '50vw' }}      footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                        <p>{e.response.data.message}</p>
                    </Dialog>
          }
  
      };
  }
