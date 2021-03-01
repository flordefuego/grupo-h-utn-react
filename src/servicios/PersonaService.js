import React from 'react';
import axios from 'axios';
import { Dialog } from 'primereact/dialog';

export class PersonaService {
      
    baseUrl ='http://localhost:3000/biblioteca';
  
     async create (persona) {
        try {
              return await axios.post(this.baseUrl+"/persona") .then(res => res.data);
        }
        catch(e) {
              <Dialog visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                  <p>{e.response.data.message}</p>
              </Dialog>
        }
      };

      async readAll(){
      
        try {
              return await axios.get(this.baseUrl+"/persona").then(res => res.data);
        }
        catch(e) {
              <Dialog visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                  <p>{e.response.data.message}</p>
              </Dialog>
        }
      };


      async delete(id){
          
        try {
              return await axios.delete(this.baseUrl+"/persona"+id).then(res => res.data);        
        }
        catch(e) {
                  <Dialog visible={displayBasic} style={{ width: '50vw' }}      footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                      <p>{e.response.data.message}</p>
                  </Dialog>
        }

    };

      async update (persona){
          
        try {
              return await axios.put(this.baseUrl+"/libro"+ persona._id, persona).then(res => res.data);        
        }
        catch(e) {
                  <Dialog visible={displayBasic} style={{ width: '50vw' }}      footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                      <p>{e.response.data.message}</p>
                  </Dialog>
        }

    };
}
