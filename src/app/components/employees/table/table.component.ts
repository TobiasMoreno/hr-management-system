import { AfterViewInit, Component, EventEmitter, inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { IEmployee } from '../../../shared/interface';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { PrintPdfService } from '../../../shared/services/print-pdf.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    CurrencyPipe,
    MatIcon,
    MatButtonModule,
    MatPaginatorModule,
    TitleCasePipe
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [MatPaginator],
})
export class TableComponent<T> implements OnInit,AfterViewInit {
  pdfService = inject(PrintPdfService);

  @Input() tableColumns: string[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: T[] = [];
  @Input() pdfTitle: string = '';
  @Input() pageSize = 5;
  @Output() pageChange = new EventEmitter<PageEvent>();


  constructor(paginator: MatPaginator) {
    this.paginator = paginator;
  }

  tableDataSource = new MatTableDataSource<T>(this.dataSource);

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit(): void {
      this.tableDataSource.data = this.dataSource;
  }
  ngAfterViewInit(): void {
      this.tableDataSource.paginator = this.paginator;
  }


  onPageChange(event: PageEvent) {
    this.pageChange.emit(event);
  }

  downloadPDF() {
    this.pdfService.generatePDF(
      this.dataSource,
      this.pdfTitle,
      this.tableColumns
    );
  }
}
