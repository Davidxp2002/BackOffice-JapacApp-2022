import { MatPaginator, MatPaginatorIntl } from '@angular/material';

export class CustomPaginator extends MatPaginatorIntl {
  constructor() {
    super();
    this.nextPageLabel = 'Siguiente página';
    this.previousPageLabel = 'Página anterior';
    this.itemsPerPageLabel = 'Elementos por página';
  }
}
