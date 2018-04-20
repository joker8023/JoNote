package main

import (
	"./model"
	"github.com/jinzhu/gorm"
)

func main() {
	db, _ := gorm.Open("postgres", "host=127.0.0.1 user=postgres dbname=JoNote sslmode=disable password=md5dcf7389aee91c97fedf6f6e6e694894c")
	defer db.Close()
	db.DropTable(&model.FileInfo{},&model.FolderInfo{},&model.FileContent{})
	db.AutoMigrate(&model.FileInfo{},&model.FolderInfo{},&model.FileContent{})
}