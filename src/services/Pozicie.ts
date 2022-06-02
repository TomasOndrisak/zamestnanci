import http from './Http'

class Pozicie {
  getAll(): Promise<any> {
    return http.get("/pozicie");
  }

    delete(poziciaId: any): Promise<any> {
    return http.delete("/pozicie/" + poziciaId);
  }

  PostData(data: any): Promise<any> {
    return http.post("/pozicie/", data);
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
export default new Pozicie();