import { TemplateRef } from "@angular/core";

export interface IEmployee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  hireDate: Date;
  departmentId: number;
  salary: number;
}
export interface EmployeesState{
  employees: IEmployee[]
  status : 'Loading' | 'Success' | 'Error'
}

export interface TableColumn {
  headerName: string; 
  accessorKey: string; // La clave del dato en los ítems para mostrar en la columna
  cellRenderer?: TemplateRef<any>; // Opcional: un template para renderizar contenido personalizado
}

export interface TablePagination {
  totalItems: number; 
  page: number; 
  size: number; 
  onPageChange: (page: number) => void; 
  onPageSizeChange: (itemsPerPage: number) => void; // Método que se llama al cambiar el tamaño de ítems por página
}