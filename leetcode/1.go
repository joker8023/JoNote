package main
func rotateString (str *string, offset int) string {
	a := *str
	length := len(a)
	b := a[length-offset:]+ a[:length-offset]
	return b
}


func main() {
	a := "abcdefg"
	str := &a
	rotateString(str,2)
}
