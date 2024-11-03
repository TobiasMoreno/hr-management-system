import { ComponentType } from '@angular/cdk/portal';
import { FormControl } from '@angular/forms';


export interface TableColumn {
  headerName: string;
  accessorKey?: string;
  accessorFn?: (row: any) => any;
}

export interface FeedbackForm {
  performanceReviewId: FormControl<number | null>;
  feedbackGiverEmployeeId: FormControl<number | null>;
  comments: FormControl<string | null>;
  feedbackDate: FormControl<string | null>;
}

export interface PdfData {
  [key: string]: any;
}

export interface TreeNode {
  name: string;
  children: TreeNode[];
  component?: ComponentType<any>;
}