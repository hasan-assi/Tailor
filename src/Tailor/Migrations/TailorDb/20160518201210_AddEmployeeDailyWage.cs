using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace Tailor.Migrations.TailorDb
{
    public partial class AddEmployeeDailyWage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(name: "FK_EmployeeTimeSheet_Employee_EmployeeId", table: "EmployeeTimeSheet");
            migrationBuilder.AddColumn<decimal>(
                name: "DailyWage",
                table: "Employee",
                nullable: false,
                defaultValue: 0m);
            migrationBuilder.AddForeignKey(
                name: "FK_EmployeeTimeSheet_Employee_EmployeeId",
                table: "EmployeeTimeSheet",
                column: "EmployeeId",
                principalTable: "Employee",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.Sql(" UPDATE dbo.Employee SET DailyWage =  [HourPerDay] * [HourRate] ");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(name: "FK_EmployeeTimeSheet_Employee_EmployeeId", table: "EmployeeTimeSheet");
            migrationBuilder.DropColumn(name: "DailyWage", table: "Employee");
            migrationBuilder.AddForeignKey(
                name: "FK_EmployeeTimeSheet_Employee_EmployeeId",
                table: "EmployeeTimeSheet",
                column: "EmployeeId",
                principalTable: "Employee",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
