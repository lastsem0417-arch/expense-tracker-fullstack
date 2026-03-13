import { Injectable } from '@angular/core'
import jsPDF from 'jspdf'
import * as XLSX from 'xlsx'

@Injectable({
providedIn:'root'
})

export class ReportService{

generatePDF(data:any[]){

const doc=new jsPDF()

doc.text("Expense Report",20,20)

let y=40

data.forEach((e:any)=>{

doc.text(
`${e.title} | ${e.amount} | ${e.category}`,
20,
y
)

y+=10

})

doc.save("expense-report.pdf")

}

generateCSV(data:any[]){

const worksheet = XLSX.utils.json_to_sheet(data)

const workbook = XLSX.utils.book_new()

XLSX.utils.book_append_sheet(
workbook,
worksheet,
"Expenses"
)

XLSX.writeFile(workbook,"expense-report.xlsx")

}

}