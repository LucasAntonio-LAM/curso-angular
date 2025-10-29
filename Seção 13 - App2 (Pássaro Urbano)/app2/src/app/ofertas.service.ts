import { Oferta } from "./shared/oferta.model"
import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { firstValueFrom } from "rxjs"



@Injectable({providedIn: 'root'})
export class OfertasService {

	constructor(private http: HttpClient) {

	}

    public getOfertas(): Promise<Oferta[]> {
        // Efetuar requisição HTTP 
		return firstValueFrom(this.http.get('http://localhost:3000/ofertas?destaque=true'))
			.then((resposta: any) => resposta)
			
		// e retornar um promise Oferta[]
    }

	public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
		return firstValueFrom(this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`))
			.then((resposta: any) => resposta)
	}

	public getDiversaoPorCategoria(categoria: string): Promise<Oferta[]> {
		return firstValueFrom(this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`))
			.then((resposta: any) => resposta)
	}

	public getOfertaPorId(id: number): Promise<Oferta> {
		return firstValueFrom(this.http.get(`http://localhost:3000/ofertas?id=${id}`))
			.then((resposta: any) => resposta.shift())
	}
}
// 	public getOfertas2(): Promise<Array<Oferta>> {
// 		return new Promise((resolve, reject) => {
// 			// Algum tipo de processamento, que ao finalizar, chama a função resolve ou reject
// 			//console.log('Sera que passou por aqui?')
// 			let deu_certo = true

// 			if(deu_certo) {
// 				setTimeout(() => resolve( this.ofertas ), 3000)
// 			} else {
// 				reject({ codigo_erro: 404, mensagem_erro: 'Servidor não encontrado' })
// 			}
			
			
// 		})
// 		.then(( ofertas: any ) => {
// 			// fazer alguma tratativa
// 			console.log('Primeiro then')
// 			return ofertas
// 		})
// 		.then(( ofertas:any ) => {
// 			console.log('Segundo then')
// 			return new Promise((resolve2, reject2) => {
// 				setTimeout(() => {
// 					resolve2( ofertas )
// 				},3000)
// 			})
// 		})
// 		.then((ofertas:any) => {
// 			console.log('Terceiro then executado após 3 segundos por que estava aguardando uma promise ser resolvida')
// 			return ofertas
// 		}) 
// 	}