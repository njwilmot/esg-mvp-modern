export async function GET(req: Request) {
    const cities = [
      { 
        id: 1, name: "Phoenix, AZ", position: { lat: 33.4484, lng: -112.0740 }, 
        insights: { costOfLiving: "Low", safety: "Moderate", amenities: "Parks, Schools, Grocery Stores" }
      },
      { 
        id: 2, name: "Austin, TX", position: { lat: 30.2672, lng: -97.7431 }, 
        insights: { costOfLiving: "Moderate", safety: "High", amenities: "Nightlife, Tech Scene" }
      },
      { 
        id: 3, name: "Chicago, IL", position: { lat: 41.8781, lng: -87.6298 }, 
        insights: { costOfLiving: "Moderate", safety: "Moderate", amenities: "Museums, Parks" }
      },
    ];
  
    return new Response(JSON.stringify(cities), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  }
  