import {
  AfterViewInit,
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {
  MatColumnDef,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { TableColumn } from '../interface';
import { MatIcon } from '@angular/material/icon';
import { PrintPdfService } from '../services/print-pdf.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-basic-table',
  standalone: true,
  imports: [
    MatColumnDef,
    MatTableModule,
    MatPaginator,
    MatIcon,
    MatButtonModule,
  ],
  templateUrl: './basic-table.component.html',
  styleUrl: './basic-table.component.css',
})
export class BasicTableComponent<T>
  implements AfterViewInit, OnInit, OnChanges
{
  pdfService = inject(PrintPdfService);

  @Input() columns!: TableColumn[];
  @Input() data: T[] = [];
  displayedColumns: string[] = [];
  @Input() pdfTitle: string = '';
  @Input() pageSize = 10;
  @Input() actionHandler: (element: T) => void = () => {};
  
  dataSource = new MatTableDataSource<T>(this.data);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource.data = this.data;
    this.displayedColumns = this.columns.map((col) => col.accessorKey);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      this.dataSource.data = changes['data'].currentValue;
    }
  }

  downloadPDF() {
    const columnStrings = this.columns.map((column) => column.headerName.toString());
    this.pdfService.generatePDF(this.data, this.pdfTitle, columnStrings);
  }


}
