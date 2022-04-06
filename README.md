
# Ngx PDF

**ngx-pdf** está dedicada a los desarrolladores en Angular y busca facilitar el trabajo con archivos PDF.

El objetivo de este proyecto consiste en convertir **HTML** y **CSS** en un archivo **PDF** con ayuda de los componentes pre-construidos de **ngx-pdf**.

> **Ngx-pdf** no genera archivos PDF desde Typescript.

> El proyecto está inspirado en la librería **mPDF** desarrollada en **PHP**.


## Usage/Examples

**your-report.component.html**

```html
<pdf-document [setting]="pdfSetting" (download)="onDownload($event)">

    <pdf-header let-doc="doc">
        <ng-container *ngFor="let page of doc.pageList; first as firstPage">
            <ng-container *ngIf="firstPage == false">
                <div class="flex flex-row flex-between">
                    <img src="assets/logo.svg" height="20" />
                    <span> {{ report.createdAt | date: "short" }} </span>
                </div>
            </ng-container>
        </ng-container>
    <pdf-header>

    <pdf-footer let-doc="doc">
        <ng-container *ngFor="let page of doc.pageList; first as firstPage; index as pageIndex">
            <ng-container *ngIf="firstPage == false">
                <div class="flex flex-row flex-right">
                    {{ pageIndex }} / {{ doc.pageList.length }}
                </div>
            </ng-container>
        </ng-container>
    <pdf-footer>

    <pdf-frontcover-page>
        <div class="flex flex-row flex-center">
                {{ report.title }}
        </div>
    <pdf-frontcover-page>

    <pdf-backcover-page>
        <div class="flex flex-row flex-bottom">
                {{ report.title }}
        </div>
    <pdf-backcover-page>

    <pdf-mark-page let-doc="doc">
        <ng-container *ngFor="let mark of doc.markList">
            <div [ngClass]="{
                  "fw-bold": mark.level == 1,
                  "fw-semibold": mark.level == 2,
                  "fw-regular": mark.level == 3,
              }">
                {{ mark.title }} ... {{ mark.index }}
            </div>
        </pdf-mark-page>
    </pdf-mark-page>

    <pdf-content>
        <div> {{ report.title }} </div>
        <pdf-mark [title]="report.title" level="1" />
        <pdf-page orientation="landscape" />

        <ng-container *ngFor="let product of report.productList">
            <pdf-mark [title]="product.name" level="2" />
            <div class="flex flex-column flex-gap">
               <div class="flex flex-row flex-gap"> {{ product.name }} </div>
               <ng-container *ngFor=let transact of product.transactionList">
                   <div class="flex flex-row flex-gap">
                       <span> {{ transact.agency }} </span>
                       <span> {{ transact.quantity }} </span>
                       <span> {{ producto.price }} </span>
                       <span> {{ transact.total }} </span>
                       <span> {{ transact.createdAt | date: "long" }} </span>
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
ngOnInit():void {
    this.report = {
        title: 'Sales Report 2022',
        createdAt: new Date(),
    };
}
...
```

## Documentation

| Componente | Descripción |
| :--------- | :---------- |
| `pdf-document` | Es el componente raíz que representa el documento PDF en donde se trabajará. |


## Feedback

Si tiene alguna sugerencia, recomendación y/o problema relacionado al proyecto, porfavor hágamelo saber mediante una `issue` en la sección `issues` de este repositorio.

Alternativamen también puede escribirme a mi correo f.michaell.a.m@gmail.com
