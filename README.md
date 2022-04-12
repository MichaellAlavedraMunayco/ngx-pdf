
# Ngx PDF

> Angular +10 component library for building PDF files on-the-fly

**ngx-pdf** está construida para desarrolladores en Angular e inspirada en la librería para PHP [mPDF](https://mpdf.github.io/), y tiene como finalidad, facilitar la codificación y generación de archivos complejos de PDF.

El propósito principal de **ngx-pdf** consiste en convertir **sobre la marcha**, código **HTML** y **CSS** en un archivo **PDF** mediante componentes pre-construidos.
**Ngx-pdf** no genera archivos PDF desde Typescript.

Para mayor entendimiento, revise la [documentación](https://michaellalavedramunayco.github.io/ngx-pdf) y las [demostraciones](https://michaellalavedramunayco.github.io/ngx-pdf)

## Prerequisites

Use la versión 10 de Angular o superior

## Install

Para usar **ngx-pdf** en su proyecto, realice la instalación usando [npm](https://www.npmjs.com/package/@michaelldev/ngx-pdf):

```cmd
npm i @michaelldev/ngx-pdf --save
```

## How to use

Ubique el módulo en donde desee usar **ngx-pdf** y agréguelo en la lista de importación de módulos.

```typescript
import { NgxPDFModule } from '@michaelldev/ngx-pdf';
...
@NgModule()
imports: [
	NgxPDFModule
]
class YourModule { }

```

## Usage/Examples

**your-report.component.html**

```html
<pdf-document [setting]="pdfSetting" (download)="onDownload($event)">

	<pdf-header let-doc="doc">
		<ng-container *ngFor="let page of doc.pageList; first as firstPage">
			<ng-container *ngIf="firstPage == false">
				<div class="flex flex-row flex-between">
					<img src="assets/logo.svg" height="20" />
					<span> {{ report.createdAt | date: 'short' }} </span>
				</div>
			</ng-container>
		</ng-container>
	</pdf-header>

	<pdf-footer let-doc="doc">
		<ng-container *ngFor="let page of doc.pageList; first as firstPage; index as pageIndex">
			<ng-container *ngIf="firstPage == false">
				<div class="flex flex-row flex-right">
					{{ pageIndex }} / {{ doc.pageList.length }}
				</div>
			</ng-container>
		</ng-container>
	</pdf-footer>

	<pdf-frontcover-page>
		<div class="flex flex-row flex-center">
			{{ report.title }}
		</div>
	</pdf-frontcover-page>

	<pdf-backcover-page>
		<div class="flex flex-row flex-bottom">
			{{ report.title }}
		</div>
	</pdf-backcover-page>

	<pdf-mark-page let-doc="doc">
		<ng-container *ngFor="let mark of doc.markList">
			<div [ngClass]="{ 'fw-bold': mark.level == 1, 'fw-semibold': mark.level == 2, 'fw-regular': mark.level == 3 }">
				{{ mark.title }} ... {{ mark.index }}
			</div>
		</ng-container>
	</pdf-mark-page>

	<pdf-content>
		<div> {{ report.title }} </div>
		<pdf-mark [title]="report.title" level="1" />
		<pdf-page orientation="landscape" />

		<ng-container *ngFor="let product of report.productList">
			<pdf-mark [title]="product.name" level="2" />
			<div class="flex flex-column flex-gap">
				<div class="flex flex-row flex-gap"> {{ product.name }} </div>
				<ng-container *ngFor="let transact of product.transactionList">
					<div class="flex flex-row flex-gap">
						<span> {{ transact.agency }} </span>
						<span> {{ transact.quantity }} </span>
						<span> {{ product.price }} </span>
						<span> {{ transact.total }} </span>
						<span> {{ transact.date | date: 'long' }} </span>
					</div>
				</ng-container>
			</div>
			<pdf-break-page />
		</ng-container>
	</pdf-content>

</pdf-document>
```


**your-report.component.ts**

```typescript
...
pdfSetting: PDFSetting;
...
ngOnInit():void {

    this.pdfSetting = {
        filename: 'Report.pdf',
        paper: 'A4',
        margin: {
            top: '0.5in',
            right: '0.5in',
            bottom: '0.5in',
            left: '0.5in'
        },
    };

    this.report = {
        title: 'Sales Report 2022',
        createdAt: new Date(),
        productList: [
            {
                name: 'Product 1',
                price: 100,
                transactionList: [
                    {
                        agency: 'Agency 1',
                        quantity: 10,
                        total: 100 * 10,
                        date: new Date()
                    }
                ],
            }
        ],
    };
}
...
onDownload(pdfFile: File) {
    window.open(URL.createObjectURL(pdfFile));
}
...
```

## Documentation

| Componente | Descripción |
| :--------- | :---------- |
| `pdf-document` | Es el componente raíz que representa el documento PDF en donde se trabajará. |


## Feedback

Si tiene alguna sugerencia, recomendación y/o problema relacionado al proyecto, porfavor hágamelo saber mediante una `issue` en la sección `issues` del [repositorio en GitHub](https://github.com/MichaellAlavedraMunayco/ngx-pdf) de este proyecto.

## Credits

**Ngx-pdf** es un proyecto de código abierto. 
Es mi intento de retribuir y colaborar con la comunidad de código abierto.
