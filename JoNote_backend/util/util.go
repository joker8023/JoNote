package util

import (
	"time"
	"strconv"
	"encoding/hex"
	"crypto/sha256"
)

func Gen_hashid(name string) (mdStr string) {
	nowtime := strconv.FormatInt(time.Now().UTC().UnixNano(), 10)
	data := name + nowtime
	hash := sha256.New()
	hash.Write( []byte(data))
	md := hash.Sum(nil)
	mdStr = hex.EncodeToString(md)
	return mdStr
}

