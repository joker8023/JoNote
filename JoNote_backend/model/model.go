package model

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

type FileInfo struct {
	gorm.Model
	HashID string
	ParentID string
	Name string
	ShareStatus bool `gorm:"default:'false'"`
	FileContent FileContent
}
type FolderInfo struct {
	gorm.Model
	HashID string
	ParentID string
	Name string
	ShareStatus bool `gorm:"default:'false'"`
}

type FileContent struct {
	gorm.Model
	HashID string
	Content string `gorm:"type:BYTEA;unique_index"`
}

func initdatabase()  {
	db, _ := gorm.Open("postgres", "host=127.0.0.1 user=postgres dbname=JoNote sslmode=disable password=md5dcf7389aee91c97fedf6f6e6e694894c")
	defer db.Close()
	db.DropTable(&FileInfo{},&FolderInfo{},&FileContent{})
	db.AutoMigrate(&FileInfo{},&FolderInfo{},&FileContent{})
}
