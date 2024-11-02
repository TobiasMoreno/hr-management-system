import { Injectable } from '@angular/core';
import jsPdf from 'jspdf';
import autoTable from 'jspdf-autotable';
import { PdfData } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class PrintPdfService {
  constructor() {}

  generatePDF<T extends PdfData>(
    data: T[],
    title: string,
    content: string[],
    headerNames: string[],
    columnStyles?: any,
    formatters?: { [key: string]: (item: T) => any }
  ) {
    const doc = new jsPdf({
      orientation: 'landscape',
      unit: 'px',
      format: 'a4',
    });
    const pageWidth = doc.internal.pageSize.width;

    doc.setFontSize(18);
    doc.text(title, pageWidth / 2, 25, { align: 'center' });
    doc.setFontSize(12);
    doc.setTextColor(100);

    const defaultColumnWidth = pageWidth / content.length - 4;

    const body = data.map((item) =>
      content.map((field) =>
        formatters && formatters[field] ? formatters[field](item) : item[field]
      )
    );
    

    autoTable(doc, {
      head: [headerNames],
      body,
      headStyles: {
        fillColor: [0, 102, 204],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
      },
      styles: {
        halign: 'center',
        overflow: 'linebreak',
        cellPadding: 5,
        minCellHeight: 20,
        fontSize: 10,
      },
      columnStyles:
        columnStyles ||
        content.reduce<{ [key: number]: any }>((acc, _, index) => {
          acc[index] = { cellWidth: defaultColumnWidth, minCellHeight: 30 };
          return acc;
        }, {}),
    });
    console.log(content);

    doc.save(title + '.pdf');
  }
}
