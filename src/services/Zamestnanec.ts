import http from './Http'

class Zamestnanec {
  getAll(): Promise<any> {
    return http.get("/Zamestnanci/archivovany/false");
  }
  getArchivovany(): Promise<any> {
    return http.get("/Zamestnanci/archivovany/true");
  }
  delete(zamestnanecId: any): Promise<any> {
    return http.delete(`/Zamestnanci/${zamestnanecId}`);
  }

  getId(id: any): Promise<any>{
    return http.get('/Zamestnanci/'+id);
  }


  
  Edit(id: any, data: any): Promise<any> {
    return http.put("/Zamestnanci/"+id, data);
  }

  Post(data: any): Promise<any> {
      return http.post("/Zamestnanci/", data);
    }
  // get(id: any): Promise<any> {
  //   return http.get(`/Zamestnanci/${id}`);
  // }
  // create(data: any): Promise<any> {
  //   return http.post("/Zamestnanci", data);
  // }
  // update(id: any, data: any): Promise<any> {
  //   return http.put(`/Zamestnanci/${id}`, data);
  // }
  // delete(id: any): Promise<any> {
  //   return http.delete(`/Zamestnanci/${id}`);
  // }
  // deleteAll(): Promise<any> {
  //   return http.delete(`/Zamestnanci`);
  // }
  // findByTitle(title: string): Promise<any> {
  //   return http.get(`/Zamestnanci?title=${title}`);
  // }
}
export default new Zamestnanec();