import { Injectable } from '@angular/core';
import jsPdf from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root',
})
export class PrintPdfService {
  constructor() {}

  generatePDF(data: any[], title: string, header: string[]) {
    const doc = new jsPdf({
      orientation: 'landscape',
      unit: 'px',
      format: 'a4',
    });

    doc.setFontSize(18);
    doc.text(title, doc.internal.pageSize.width / 2, 25, { align: 'center' });
    doc.setFontSize(12);
    doc.setTextColor(100);

    const pageWidth = doc.internal.pageSize.width;
    const columnWidth = pageWidth / header.length - 4;

    autoTable(doc, {
      head: [header],
      body: data.map((item) => [
        item.id,
        item.firstName,
        item.lastName,
        item.email,
        item.phoneNumber,
        item.hireDate,
        item.departmentId,
        item.salary,
      ]),

      headStyles: {
        fillColor: [41, 128, 185],
        textColor: [255, 255, 255],
      },
      styles: {
        halign: 'center', // Centra el texto en cada celda
        overflow: 'linebreak', // Evita truncamientos
        cellPadding: 3, // Ajusta el espacio en celdas
      },
      columnStyles: {
        0: { cellWidth: columnWidth, minCellHeight: 30 },
        1: { cellWidth: columnWidth, minCellHeight: 30 },
        2: { cellWidth: columnWidth, minCellHeight: 30 },
        3: { cellWidth: columnWidth, minCellHeight: 30 },
        4: { cellWidth: columnWidth, minCellHeight: 30 },
        5: { cellWidth: columnWidth, minCellHeight: 30 },
        6: { cellWidth: columnWidth, minCellHeight: 30 },
        7: { cellWidth: columnWidth, minCellHeight: 30 },
        // Añade más columnas según tu configuración
      },
    });

    doc.save(title + '.pdf');
  }
}
