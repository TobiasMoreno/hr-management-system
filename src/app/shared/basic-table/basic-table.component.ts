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
import { PdfData, TableColumn } from '../interfaces/interface';
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
  @Input() columns!: TableColumn[];
  @Input() data: T[] = [];
  displayedColumns: string[] = [];
  @Input() actionHandler: (element: T) => void = () => {};

  dataSource = new MatTableDataSource<T>(this.data);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource.data = this.data;
    this.displayedColumns = this.columns.map((col) => col.accessorKey || '');
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      this.dataSource.data = changes['data'].currentValue;
    }
  }

  getCellValue(row: T, column: TableColumn): any {
    return column.accessorFn
      ? column.accessorFn(row)
      : (row as any)[column.accessorKey!];
  }
}
