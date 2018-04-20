package main

import (
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"./model"
	"./util"
)

func main() {
	db, _ := gorm.Open("postgres", "host=127.0.0.1 user=postgres dbname=JoNote sslmode=disable password=md5dcf7389aee91c97fedf6f6e6e694894c")
	defer db.Close()
	r := gin.Default()
	r.GET("/fileinfo", func(c *gin.Context) {

		var fileinfos []model.FileInfo
		db.Find(&fileinfos)
		c.JSON(200, gin.H{
			"message": fileinfos,
		})
	})
	r.POST("/fileinfo", func(c *gin.Context) {
		parent_id := c.DefaultPostForm("parent_id","")
		name := c.DefaultPostForm("name", "")
		hashid := util.Gen_hashid(name)
		fileInfo := model.FileInfo{Name: name, ParentID: parent_id, HashID:hashid}
		db.Create(&fileInfo)
		result := !db.NewRecord(fileInfo)
		c.JSON(200, gin.H{
			"message": result,
		})
	})
	r.GET("/folderinfo", func(c *gin.Context) {

		var folderinfo []model.FolderInfo
		db.Find(&folderinfo)
		c.JSON(200, gin.H{
			"message": folderinfo,
		})
	})
	r.POST("/folderinfo", func(c *gin.Context) {
		parent_id := c.DefaultPostForm("parent_id","")
		name := c.DefaultPostForm("name", "")
		hashid := util.Gen_hashid(name)
		folderinfo := model.FolderInfo{Name: name, ParentID: parent_id, HashID:hashid}
		db.Create(&folderinfo)
		result := !db.NewRecord(folderinfo)
		db.Find(&folderinfo)
		c.JSON(200, gin.H{
			"message": result,
		})
	})
	r.Run(":8000") // listen and serve on 0.0.0.0:8080
}
