using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace AssetCMS.Migrations
{
    public partial class AddAssetCreationDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreationDate",
                table: "Asset",
                nullable: false,
                defaultValueSql: "GETDATE()");

            migrationBuilder.Sql("Update Asset SET CreationDate = GETDATE() WHERE CreationDate IS NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "CreationDate", table: "Asset");
        }
    }
}
