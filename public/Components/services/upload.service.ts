import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable';


declare var io: any;

@Injectable()
export class UploadService{

constructor(){

}

private uploadRequest(url: string, name: string, files: File[], params: string): Observable {

	return Observable.create(observer => {
		let formData: FormData = new FormData(),
		xhr: XMLHttpRequest = new XMLHttpRequest();
		console.log(files)
		if(params)
			formData.append('data', params);
		for(var i in files){

			formData.append(name, files[i], files[i].name);
		}
		console.log('passed')
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4){
				if(xhr.status === 200){
					observer.next(JSON.parse(xhr.response));
				}
				else{
					observer.error(xhr.response);
				}
			}
		};


		console.log(formData.values())

		// xhr.upload.onprogress = (event) => {
		// 	this.progress = Math.round(event.loaded / event.total * 100);

		// 	this.progressObserver.next(this.progress)
		// };

		xhr.open('Post', url, true);
		xhr.send(formData);
	});
}


}