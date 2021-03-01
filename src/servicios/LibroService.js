import React from 'react';
import axios from 'axios';
import { Dialog } from 'primereact/dialog';

export class LibroService {
      
    baseUrl ='http://localhost:3000/biblioteca';
  
     async create (libro) {
        try {
              return await axios.post(this.baseUrl+"/libro") .then(res => res.data);
        }
        catch(e) {
              <Dialog visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                  <p>{e.response.data.message}</p>
              </Dialog>
        }
      };

      async readAll(){
      
        try {
              return await axios.get(this.baseUrl+"/libro").then(res => res.data);
        }
        catch(e) {
              <Dialog visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                  <p>{e.response.data.message}</p>
              </Dialog>
        }
      };


      async delete(id){
          
        try {
              return await axios.delete(this.baseUrl+"/libro"+id).then(res => res.data);        
        }
        catch(e) {
                  <Dialog visible={displayBasic} style={{ width: '50vw' }}      footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                      <p>{e.response.data.message}</p>
                  </Dialog>
        }

    };

      async update (libros){
          
        try {
              return await axios.put(this.baseUrl+"/libro"+ libro._id, libro).then(res => res.data);        
        }
        catch(e) {
                  <Dialog visible={displayBasic} style={{ width: '50vw' }}      footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                      <p>{e.response.data.message}</p>
                  </Dialog>
        }

    };
}

