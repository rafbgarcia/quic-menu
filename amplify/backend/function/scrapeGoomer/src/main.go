package main

import (
	"context"
	"strings"

	"github.com/aws/aws-lambda-go/lambda"

	"github.com/PuerkitoBio/goquery"
	"github.com/geziyor/geziyor"
	"github.com/geziyor/geziyor/client"
)

type Params struct {
	Url string `json:"url"`
}
type Availability struct {
	FromDay  string
	ToDay    string
	FromTime string
	ToTime   string
}

type ScrapedPlace struct {
	Name           string
	Category       string
	Description    string
	Address        string
	Availability   string
	PaymentMethods []string
}

func mapPlace(place *ScrapedPlace, doc *goquery.Document) {
	place.Name = doc.Find(".sc-1ngqcy0-0.clzqfz > div:nth-child(2) > div:nth-child(1)").Text()
	place.Category = doc.Find(".sc-1ngqcy0-0.clzqfz > div:nth-child(2) > div:nth-child(2) > small").Text()
	place.Description = doc.Find(".sc-1ngqcy0-0.clzqfz > div:nth-child(2) > div:nth-child(3)").Text()

	place.Address = doc.Find(".sc-1ngqcy0-0.clzqfz > div:nth-child(4) > div:nth-child(2)").Text()

	values := doc.Find(".sc-1ngqcy0-0.clzqfz > div:nth-child(5) > div:not(:first-child)").Map(func(_i int, s *goquery.Selection) string {
		return s.Text()
	})
	place.Availability = strings.Join(values, ", ")

	place.PaymentMethods = doc.Find(".sc-1ngqcy0-0.clzqfz > div:nth-child(6) > div:nth-child(2) > div").Map(func(_i int, s *goquery.Selection) string {
		return s.Find("div").Text()
	})
}

func HandleRequest(ctx context.Context, params Params) (ScrapedPlace, error) {
	place := ScrapedPlace{}
	geziyor.NewGeziyor(&geziyor.Options{
		RobotsTxtDisabled: true,
		StartRequestsFunc: func(g *geziyor.Geziyor) {
			g.GetRendered(params.Url+"/about", g.Opt.ParseFunc)
		},
		ParseFunc: func(g *geziyor.Geziyor, r *client.Response) {
			mapPlace(&place, r.HTMLDoc)
		},
	}).Start()

	return place, nil
}

func main() {
	lambda.Start(HandleRequest)
}
