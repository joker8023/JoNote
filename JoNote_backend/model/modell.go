package main

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

type FileInfo struct {
	gorm.Model
	HashID string
	ParentID string
	Name string
	ShareStatus bool

}
type FolderInfo struct {
	gorm.Model
	HashID string
	ParentID string
	Name string
	ShareStatus bool
}

type FileContent struct {
	gorm.Model
	HashID string
	Content string
}
func main() {
	db, _ := gorm.Open("postgres", "host=myhost user=gorm dbname=gorm sslmode=disable password=mypassword")
	defer db.Close()
}