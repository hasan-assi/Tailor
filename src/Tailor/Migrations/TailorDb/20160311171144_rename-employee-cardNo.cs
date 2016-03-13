using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace Tailor.Migrations.TailorDb
{
    public partial class renameemployeecardNo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "CardId", table: "Employee");
            migrationBuilder.AddColumn<string>(
                name: "CardNo",
                table: "Employee",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "CardNo", table: "Employee");
            migrationBuilder.AddColumn<string>(
                name: "CardId",
                table: "Employee",
                nullable: false,
                defaultValue: "");
        }
    }
}
